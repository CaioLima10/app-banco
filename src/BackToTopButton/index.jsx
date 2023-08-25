import { useEffect, useState } from "react"
import { ArrowUp, Button } from "./style"

export default function BackToTopButton() {
    const [ backToTop , setBackToTop ] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTop(true)
            }else{
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div>
        { backToTop && (
            <Button onClick={scrollUp}><ArrowUp/></Button>
        ) }
    </div>
  )
}
