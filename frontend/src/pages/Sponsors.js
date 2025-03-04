import { NavBar } from "../components/NavBar";

export const  Sponsors = () => {
    return (
        <div class='bg-cover min-h-screen bg-[#182e2e] pr-[18px]'>
            <NavBar isDark={true}/>
            <h1 class='text-center pt-10 pb-3 text-white text-6xl font-extrabold'>OUR SPONSORS</h1>
            <h1 class='text-center  pt-[80px] pb-6 text-white text-3xl font-semibold'>PLATNUIM</h1>
            <div class='flex justify-center mt-5'>
            <div class='bg-white rounded-[40px] h-[585px] w-1/2 mx-auto flex justify-center items-center'>
                <img src="/sponsorplaceholder.png" alt='placeholder'/>
            </div>
            </div>
        </div>
    );
}