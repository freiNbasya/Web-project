
const showCategory = (category) => {
    const homePage = document.querySelector(".home").innerHTML;

    const categoryContent = {
        TVs: `
                <h2>TV Models</h2>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="text-center box">
                            <h3>Cool model 1</h3>
                            <img src="images/tv.webp" class="img-fluid">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="text-center box">
                            <h3>Cool model 2</h3>
                            <img src="images/tv.webp" class="img-fluid">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="text-center box">
                            <h3>Cool model 3</h3>
                            <img src="images/tv.webp" class="img-fluid">
                        </div>
                    </div>
                </div>
            `,
        Smartphones: `
                <h2>Smartphone Models</h2>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="text-center box">
                            <h3>Cool model 1</h3>
                            <img src="images/smartphone.webp" class="img-fluid" id="smartphone">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="text-center box">
                            <h3>Cool model 2</h3>
                            <img src="images/smartphone.webp" class="img-fluid" id="smartphone">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="text-center box">
                            <h3>Cool model 3</h3>
                            <img src="images/smartphone.webp" class="img-fluid" id="smartphone">
                        </div>
                    </div>
                </div>
            `,
        Tablets: `
                <h2>Tablet Models</h2>
                <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="text-center box">
                        <h3>Cool model 1</h3>
                        <img src="images/tablet.png" class="img-fluid" id="tablet">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center box">
                        <h3>Cool model 2</h3>
                        <img src="images/tablet.png" class="img-fluid" id="tablet">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center box">
                        <h3>Cool model 3</h3>
                        <img src="images/tablet.png" class="img-fluid" id="tablet">
                    </div>
                </div>
            </div>
            `,
        Laptops: `
                <h2>Laptop Models</h2>
                <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="text-center box">
                        <h3>Cool model 1</h3>
                        <img src="images/laptops.png" class="img-fluid">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center box">
                        <h3>Cool model 2</h3>
                        <img src="images/laptops.png" class="img-fluid">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center box">
                        <h3>Cool model 3</h3>
                        <img src="images/laptops.png" class="img-fluid">
                    </div>
                </div>
            </div>
            `,
        Monitors: `
                <h2>Monitor Models</h2>
                <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="text-center box">
                        <h3>Cool model 1</h3>
                        <img src="images/monitor.png" class="img-fluid" id="monitor">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center box">
                        <h3>Cool model 2</h3>
                        <img src="images/monitor.png" class="img-fluid" id="monitor">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center box">
                        <h3>Cool model 3</h3>
                        <img src="images/monitor.png" class="img-fluid" id="monitor">
                    </div>
                </div>
            </div>
            `,
        Earphones: `
                <h2>Earphone Models</h2>
                <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="text-center box">
                        <h3>Cool model 1</h3>
                        <img src="images/earphones.png" class="img-fluid" id="earphones">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center box">
                        <h3>Cool model 2</h3>
                        <img src="images/earphones.png" class="img-fluid" id="earphones">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center box">
                        <h3>Cool model 3</h3>
                        <img src="images/earphones.png" class="img-fluid" id="earphones">
                    </div>
                </div>
            </div>
            `,
    };

    document.querySelector(".home").innerHTML = categoryContent[category];

    const back = document.createElement("button");
    back.innerHTML = "Back to the Home Page";
    back.classList.add("btn", "btn-secondary", "btn-sm", "mt-3");
    back.addEventListener("click", () => {
        document.querySelector(".home").innerHTML = homePage;
    });
    document.querySelector(".home").appendChild(back);
};

