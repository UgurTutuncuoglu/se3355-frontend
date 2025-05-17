import React from 'react';
import { useSelector } from 'react-redux';

export default function Navbar(){
   const history = useSelector((state) => state.history);
    return(
    <header className="sticky-top">    
       <nav className="navbar navbar-light bg-white navbar-expand-lg">
            <div className="container custom-navbar-container">
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ">
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link ps-0 dropdown-toggle text-dark fw-bold" data-bs-toggle="dropdown" >SON DAKİKA</a>
                            <ul className="dropdown-menu" id="first">
                                <li><a href="#" className="dropdown-item">Google Haberler</a></li>
                                <li><a href="#" className="dropdown-item">BBC News Türkçe</a></li>
                                <li><a href="#" className="dropdown-item">Hürriyet</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle text-dark fw-bold" role="button" data-bs-toggle="dropdown">YAZARLAR</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Ahmet Çakar</a></li>
                                <li><a className="dropdown-item" href="#">Erman Toroğlu</a></li>
                                <li><a className="dropdown-item" href="#">Reha Muhtar</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-1 text-dark fw-bold">GÜNDEM</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-1 text-dark fw-bold">EKONOMİ</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-1 text-dark fw-bold">DÜNYA</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-1 text-dark fw-bold">GÜNÜN İÇİNDEN</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-1 text-dark fw-bold">SPOR</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-1 text-dark fw-bold">HAYAT</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-1 text-dark fw-bold">MAGAZİN</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-1 text-dark fw-bold">FİNANS</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-1 text-dark fw-bold">RESMİ İLANLAR</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link ps-0 dropdown-toggle text-dark fw-bold" data-bs-toggle="dropdown">Geçmiş</a>
                            <ul className="dropdown-menu" id="history-dropdown">
                                {history.length === 0 ? (
                                  <li><span className="dropdown-item text-muted">Henüz ziyaret yok</span></li>
                                ) : (
                                    history.map((caption,index) => (
                                        <li key = {index}>
                                            <span className="dropdown-item">{caption}</span>
                                        </li>
                                    ))
                                ) }
                            </ul>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    );
}