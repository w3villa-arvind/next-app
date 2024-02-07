import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: { id: params.id }
    })
    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })

    const findUserById = await prisma.user.findUnique({
        where: { id: params.id }
    })
    if (!findUserById)
        return NextResponse.json({ error: 'user not found' }, { status: 404 })
    const updatedUser = await prisma.user.update({
        where: { id: findUserById.id },
        data: { name: body.name, email: body.email }
    })

    return NextResponse.json(updatedUser, { status: 200 })
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const existUser = await prisma.user.findUnique({
        where: { id: params.id }
    })

    if (!existUser)
        return NextResponse.json({ error: 'User Not found' }, { status: 404 })

    const deletedUser = await prisma.user.delete({
        where: { id: existUser.id }
    })
    return NextResponse.json(`${existUser.name}` + " " + "has been deleted successfuly.")
}