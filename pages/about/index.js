import Layout from "@/components/Layout";
import Private from "@/components/Private";

export default function index() {
    return (
        <>
            <Private>
                <Layout>
                    <h2>about page</h2>
                </Layout>
            </Private>
        </>
    );
}
