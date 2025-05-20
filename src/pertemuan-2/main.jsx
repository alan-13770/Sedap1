import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./container";
import ArtikelDetail from "./ArtikelDetail";
import './custom.css';

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
                <HelloWorld/>
                
            </Container>
            <ArtikelDetail />
            
        </div>
    )