import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const semester = searchParams.get('sem')

    if (!semester || !['1', '2', '3', '4', '5'].includes(semester)) {
      return NextResponse.json(
        { error: 'Invalid semester' },
        { status: 400 }
      )
    }

    const semesterNames: { [key: string]: string } = {
      '1': '1st',
      '2': '2nd',
      '3': '3rd',
      '4': '4th',
      '5': '5th',
    }

    const fileName = `VTU_${semesterNames[semester]}_result.pdf`
    const filePath = path.join(process.cwd(), 'public', fileName)

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Result file not found' },
        { status: 404 }
      )
    }

    const fileBuffer = fs.readFileSync(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': fileBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error('[v0] Result download error:', error)
    return NextResponse.json(
      { error: 'Failed to download result' },
      { status: 500 }
    )
  }
}
