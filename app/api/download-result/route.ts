import { NextRequest, NextResponse } from 'next/server'

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

    // Map semester to blob URLs
    const resultUrls: { [key: string]: string } = {
      '1': 'https://blobs.vusercontent.net/blob/VTU_1stresult-PnsaQruqtg03Q5InMIDWI2e8YEuibP.pdf',
      '2': 'https://blobs.vusercontent.net/blob/VTU_2nd_result-mSVTc9XOLtxQbG5p4h3UJ9a6lZF9WV.pdf',
      '3': 'https://blobs.vusercontent.net/blob/VTU_3rd_resilt-urTyUWal9KM7CeJzduEnO4YhzbwlqA.pdf',
      '4': 'https://blobs.vusercontent.net/blob/VTU_4th_result-OCfMYpbyvwkYIgK32yO9pXRi4GSL4X.pdf',
      '5': 'https://blobs.vusercontent.net/blob/VTU_5th_resultdf-BpBN9CiHNHHlxNAd49VKh5xn2kAGk5.pdf',
    }

    const semesterNames: { [key: string]: string } = {
      '1': '1st',
      '2': '2nd',
      '3': '3rd',
      '4': '4th',
      '5': '5th',
    }

    const resultUrl = resultUrls[semester]
    const fileName = `VTU_${semesterNames[semester]}_result.pdf`

    // Fetch the PDF from the blob URL
    const response = await fetch(resultUrl)

    if (!response.ok) {
      throw new Error(`Failed to fetch result: ${response.statusText}`)
    }

    const buffer = await response.arrayBuffer()

    return new NextResponse(Buffer.from(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': buffer.byteLength.toString(),
        'Cache-Control': 'public, max-age=31536000',
        'Pragma': 'public',
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
