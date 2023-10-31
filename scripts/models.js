
const showCategory = (category) => {
    const homePage = document.querySelector(".home").innerHTML;
    const categories = {
        TV: {
            title: 'TV Models', items: [
                { name: 'Cool model 1', imgSrc: 'images/tv.webp' },
                { name: 'Cool model 2', imgSrc: 'images/tv.webp' },
                { name: 'Cool model 3', imgSrc: 'images/tv.webp' }
            ]
        },
        Smartphone: {
            title: 'Smartphone Models', items: [
                { name: 'Cool model 1', imgSrc: 'images/smartphone.webp', id: 'smartphone' },
                { name: 'Cool model 2', imgSrc: 'images/smartphone.webp', id: 'smartphone' },
                { name: 'Cool model 3', imgSrc: 'images/smartphone.webp', id: 'smartphone' }
            ]
        },
        Tablets: {
            title: 'Tablet Models', items: [
                { name: 'Cool model 1', imgSrc: 'images/tablet.png', id: 'tablet' },
                { name: 'Cool model 2', imgSrc: 'images/tablet.png', id: 'tablet' },
                { name: 'Cool model 3', imgSrc: 'images/tablet.png', id: 'tablet' }
            ]
        },
        Laptops: {
            title: 'Laptop Models', items: [
                { name: 'Cool model 1', imgSrc: 'images/laptops.png' },
                { name: 'Cool model 2', imgSrc: 'images/laptops.png' },
                { name: 'Cool model 3', imgSrc: 'images/laptops.png' }
            ]
        },
        Monitors: {
            title: 'Monitor Models', items: [
                { name: 'Cool model 1', imgSrc: 'images/monitor.png', id: 'monitor' },
                { name: 'Cool model 2', imgSrc: 'images/monitor.png', id: 'monitor' },
                { name: 'Cool model 3', imgSrc: 'images/monitor.png', id: 'monitor' }
            ]
        },
        Earphones: {
            title: 'Earphones Models', items: [
                { name: 'Cool model 1', imgSrc: 'images/earphones.png', id: 'earphones' },
                { name: 'Cool model 2', imgSrc: 'images/earphones.png', id: 'earphones' },
                { name: 'Cool model 3', imgSrc: 'images/earphones.png', id: 'earphones' }
            ]
        }

    }

    const getCategoryItems = (items) => {
        let template = ''
        items.forEach(item => template = template + `
                    <div class="col-md-4">
                          <div class="text-center box">
                              <h3>${item.name}</h3>
                              <img src=${item.imgSrc} class="img-fluid" id=${item.id}>
                          </div>
                 </div>
                    `);
        return template;
    }
    const getCategoryTemplate = (categoryData) => {
        return `
            <h2>${categoryData.title}</h2>
            <div class="row justify-content-center">
                ${getCategoryItems(categoryData.items)}
            </div>
        `;
    }

    const categoryContent = {
        'TVs': getCategoryTemplate(categories['TV']),
        'Smartphones': getCategoryTemplate(categories['Smartphone']),
        'Tablets': getCategoryTemplate(categories['Tablets']),
        'Laptops': getCategoryTemplate(categories['Laptops']),
        'Monitors': getCategoryTemplate(categories['Monitors']),
        'Earphones': getCategoryTemplate(categories['Earphones'])
    }

    document.querySelector(".home").innerHTML = categoryContent[category];

    const back = document.createElement("button");
    back.innerHTML = "Back to the Home Page";
    back.classList.add("btn", "btn-secondary", "btn-sm", "mt-3");
    back.addEventListener("click", () => {
        document.querySelector(".home").innerHTML = homePage;
    });
    document.querySelector(".home").appendChild(back);
};

