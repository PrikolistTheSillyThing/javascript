let menuItems = [ 

    {
        title: "Team",
        menu: [
            {
                title: "CEO: John Smith"
            },
            {
                title: "DEV: John Doe"
            },
        ]
    },

    {
        title: "Services",
        icon: '<i class="fa-brands fa-servicestack"></i>',
        menu: [
            {
                title: "Web & App development"
            },
            {
                title: "App testing"
            },
            {
                title: "Web design"
            },
        ]
    },

    {
        title: "Reviews",
    },

    {
        title: "Order",
        url: "/order",
        icon: '<i class="fa-solid fa-taxi"></i>'
    },

    {
        title: "Contacts",
    }

]
const renderMenu = function (parentElement, items) {
    let html = '<ul>'
    for (let i = 0; i<items.length;i++) {
        html += `<li>`
        if (items[i].icon == undefined) {
            html += `<a href="${items[i].url ?? "#"}"  onclick="renderSubMenu(${i}, ${items[i].menu != undefined})">
                ${items[i].title}
            </a>`
        } else {
            html += `<a href="${items[i].url ?? "#"}"  onclick="renderSubMenu(${i}, ${items[i].menu != undefined})">
                ${items[i].icon}
                ${items[i].title}
            </a>`
        }
            
        html += `</li>`
        // if (items[i].icon == undefined) {
        //     items[i].icon = ''
        // }
    }
    html += `</ul>`
    parentElement.innerHTML += html
}

const renderSubMenu = function (index, render) {
    if (render) {
        let li = document.querySelector(`li:nth-child(${index+1})`)

        if (!menuItems[index].open) {
            renderMenu(li, menuItems[index].menu)
            menuItems[index].open = true
        } else {
            navBar.innerHTML = ``
            renderMenu(navBar, menuItems)
            menuItems[index].open = false
        }


    }
}


renderMenu(navBar, menuItems)