import Image from "next/image";
import { ImageResponse } from "next/og";


export const size = {
 width : 32,
 height : 32
}

export default function icon() {
    return new ImageResponse(
        (
            <Image src="/favicon.ico" alt="image" width="23" height="23" />
        ),
        size
    )
}