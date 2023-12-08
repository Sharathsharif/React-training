import Product from "./Product";

function Productlist() {


    let productlist=[
        {id:1, Name: "samsung s23",Price: 115000, url:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-1.jpg" },
        {id:1, Name: "samsung s23",Price: 115000, url:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-1.jpg" },
        {id:1, Name: "samsung s23",Price: 115000, url:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-1.jpg" },
    ]
    return (
        <div className="products">
            <Product
                Name="samsung s23 Ultra"
                Price="115000"
                url="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-1.jpg"
            />
            <Product
                Name="iphone"
                Price="200000"
                url="https://images.unsplash.com/photo-1606041011872-596597976b25?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8fDA%3D"
            />
            <Product
                Name="mi s23 Ultra"
                Price="10000"
                url="https://i01.appmifile.com/webfile/globalimg/in/cms/D1301D76-E04D-EF09-6195-53229DE6D543.jpg"
            />
        </div>
    );
}

export default Productlist;
