
function TopHead() {
    return ( 
        <div className="top-head center">
        <h2 className="top-head-heading">NEW ARRIVALS</h2>
        <nav className="bread-crumbs">
            <a href="/" className="bread-crumbs__link">HOME&nbsp;/&nbsp; </a>
            <a href="/catalog" className="bread-crumbs__link">MEN&nbsp;/&nbsp; </a>
            <a href="/catalog" className="bread-crumbs__link bread-crumbs__link__site">NEW ARRIVALS</a>
        </nav>
    </div>
     );
}

export default TopHead;