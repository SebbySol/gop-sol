export default function Footer() {
    return (
        <footer className="bg-black text-white py-15 px-6">
            <div className="container mx-auto text-center">
                <p className="text-2xl">
                    &copy; {new Date().getFullYear()} SebbySol. All rights reserved.
                </p>
                <p className="text-xs mt-2">
                    Maangas at Matikas na pinoy developer.
                </p>
            </div>
        </footer>
    )
}   