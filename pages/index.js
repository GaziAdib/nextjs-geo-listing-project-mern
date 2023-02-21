import Layout from "@/components/Layout";
import Private from "@/components/Private";
import React from "react";

export default function index() {
    return (
        <div>
            <Private>
                <Layout>
                    <h2>home page</h2>
                </Layout>
            </Private>
        </div>
    );
}
