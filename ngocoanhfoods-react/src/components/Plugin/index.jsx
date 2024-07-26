import { useEffect, useState } from "react";

export default function Plugin() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset;
          // Kiểm tra nếu người dùng đã cuộn xuống từ đầu trang, thì đặt isScrolled thành true
          setIsScrolled(scrollTop > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
        // Xóa bỏ event listener khi component unmount
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      useEffect(() => {
        console.log(isScrolled);
      }, [isScrolled])

    return(
        <>
        {/* <div style={{backgroundColor:'red', position:'fixed', height:'20px', width:'20px', bottom:'0px'}}>
        </div> */}
        </>
    )
}