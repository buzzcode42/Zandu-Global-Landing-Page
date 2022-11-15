export function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <div id="footer">
            <footer className="bg-white text-center lg:text-left">
                <div className="text-gray-700 bg-white text-center p-4">
                    © {currentYear} Copyright
                    <a className="text-gray-800" href="https://zanduglobal.com/"> ZanduGlobal Inc.</a>
                </div>
            </footer>
        </div>
    )
}
