export default function ListingContent() {
    return (
        <>
            <div className="flex-1 p-[30px]">
                <div className="grid grid-cols-2">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                className="rounded-t-lg"
                                src="/docs/images/blog/image-1.jpg"
                                alt=""
                            />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    1238 Montreal Park, Montreal, Canada, RWUI12
                                </h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
