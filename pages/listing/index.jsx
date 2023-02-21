import Layout from "@/components/Layout";
import ListingContent from "@/components/pages/listing/ListingContent";
import ListingSidebar from "@/components/pages/listing/ListingSidebar";

export default function index() {
    return (
        <>
            <Layout>
                <div className="flex">
                    <ListingSidebar />
                    <ListingContent />
                </div>
            </Layout>
        </>
    );
}
