import { order } from "./pages/order-page/scriptOrder";
import { swiper } from "./pages/order-page/swiper";

const app = document.getElementById("app");
const routes = {
    "/": "/pages/home.html",
    "/fazer-pedido": "/pages/make-order/index.html"
};
 
export const render = async (path) => {
    const route = routes[path] || routes["/"];
    console.log(route);

    try{
        const req = await fetch(route);

        if(!req.ok){
            app.innerHTML = `<h1>Erro ${req.status}</h1>`;
            return;
        }

        const res = await req.text();

        app.innerHTML = res;
        logicPage(path);
    }
    catch (error){
        console.error("Erro: ", error);
        app.innerHTML = "<h1>Erro ao carregar a página</h1>";
    }
};

const logicPage = (path) => {
    switch(path){
        case "/": 
            console.log("Home page");
        break;
        case "/fazer-pedido": 
            swiper();
            order(); 
            console.log("Order page");
        break;
        // case "/Home": 
        //     makeNavbarWorks(); 
        // break;
        // case "/Estoque": 
        //     makeNavbarWorks(); 
        //     estoque(); 
        // break;
        // case "/Pedidos":
        //     makeNavbarWorks();
        //     pedido();
        // break;
        // case "/Painel-pedidos":
        //     makeNavbarWorks();
        //     ordersPanel();
        // break;
    }
};

window.onpopstate = () => {
    render(location.pathname);   
};

document.body.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-link]");
    if (!link) return;

    e.preventDefault();

    const path = link.getAttribute("href");
    history.pushState({}, "", path);
    render(path);
});

document.addEventListener("DOMContentLoaded", () => {
    render(location.pathname);
});


