import Layout from "@/components/Layout";
import useLoggedIn from "@/hooks/useLoggedIn";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineGoogle } from "react-icons/ai";

export default function index() {
    const isLoggedIn = useLoggedIn();
    const router = useRouter();

    useEffect(() => {
        if (isLoggedIn) {
            router.push("/");
        }
    }, [isLoggedIn, router]);

    return (
        <>
            <Layout>
                <section className="py-[100px]">
                    <div className="container">
                        <div className="lg:w-1/6 mx-auto">
                            <button className="bg-white text-gray-800 py-2 px-4 flex items-center gap-[6px] shadow-lg rounded-md">
                                <div className="bg-red-600 rounded-md p-2 text-white h-[40px] w-[40px] flex items-center justify-center">
                                    <AiOutlineGoogle />
                                </div>
                                <span
                                    className="whitespace-pre"
                                    onClick={() => signIn()}
                                >
                                    Sign in with Google
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
