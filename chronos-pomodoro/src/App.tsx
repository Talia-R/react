import { useState } from "react";
import { PlayIcon } from "lucide-react";

import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import { Menu } from "./components/Menu"
import { Countdown } from "./components/Countdown"
import { Logo } from "./components/Logo";
import { Footer } from "./components/Footer";
import { MainForm } from "./components/MainForm";

import './styles/theme.css';
import './styles/global.css';

export function App(){
    return (
        <>
            <Container>
                <Logo/>
                <Menu/>
                <Countdown/>
                <MainForm/>
                <Footer/>
            </Container>
        </>
    )
}