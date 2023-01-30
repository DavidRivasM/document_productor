import React, { Component } from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import ProductoDeclaracionJuradaConfirmacion from '../../createdDocuments/PARR/ProductoDeclaracionJuradaConfirmacion';
;


class DeclaracionJuradaConfirmacion extends Component {
    state = {
        consecutivo: '',
        fecha: '',
        persona: '',
        cedPersona: '',
        lugarConfirmacion: '',
        fechaConfirmacion: '',
        añoConfirmacion: '',
        edad: '',
        estadoCivil: '',
        residencia: '',
        padrino: '',
        madrina:'',
        obispoConfirmacion: '',
        pruebaConfirmacion: '',
        testigo: '',
        cedTestigo: '',
        calidadTestigo: '',

        parroquia: '',
        cura: '',
        tel: "",
        email: "",
        web: "",
        image: "",
        codigo: '',
        lugar: '',
        postSubmitted: false,
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value,
        })
            ;
    }

    capturar = () => {
        if (this.state.parroquia === "Parroquia de San Pedro de Poás") {
            this.setState({
                tel: 24485193
            })
            this.setState({
                email: "parroquiapoas@hotmail.com"
            })
            this.setState({
                web: "https://www.diocesisdealajuela.org/parroquia-san-pedro.html"
            })
            this.setState({
                image: "https://i.ibb.co/z7LVbzL/Parroquia-Poas.png"
            })
            this.setState({
                codigo: "PPOAS"
            })
            this.setState({
                lugar: "Poás"
            })
        }

        else if (this.state.parroquia === "Parroquia Nuestra Señora del Pilar") {

            this.setState({
                tel: 24414665
            })
            this.setState({
                email: "catedraldealajuela1921@gmail.com"
            })
            this.setState({
                web: "https://es-la.facebook.com/Catedral1921alajuela/"
            })
            this.setState({
                image: "https://i.ibb.co/qdx2xZ4/LOGO-Catedral.jpg"
            })
            this.setState({
                codigo: "PCATE"
            })
            this.setState({
                lugar: "Catedral"
            })
        }

        else if (this.state.parroquia === "Parroquia de San Rafael Arcángel Zarcero") {

            this.setState({
                tel: 24633000
            })
            this.setState({
                email: "parroquiasanrafaelzarcero@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/ParroquiaZarcero/"
            })
            this.setState({
                image: "https://i.ibb.co/JjDT9Gq/LOGO-Zarcero.jpg"
            })
            this.setState({
                codigo: "PZARC"
            })
            this.setState({
                lugar: "Zarcero"
            })
        }

        else if (this.state.parroquia === "Parroquia Nuestra Señora del Carmen") {

            this.setState({
                tel: 24411390
            })
            this.setState({
                email: "iglesiaelcarmenalajuela@gmail.com"
            })
            this.setState({
                web: "https://es-la.facebook.com/ParroquiaNuestraSradelCarmenAlajuela/"
            })
            this.setState({
                image: "https://i.ibb.co/8b21wr4/LOGO-El-Carmen.png"
            })
            this.setState({
                codigo: "PCARM"
            })
            this.setState({
                lugar: "El Carmen"
            })
        }
        else if (this.state.parroquia === "Parroquia Nuestra Señora de las Mercedes") {

            this.setState({
                tel: 24941616
            })
            this.setState({
                email: "parroquiadegrecia@gmail.com"
            })
            this.setState({
                web: "http://www.ParroquiadeGrecia.com/"
            })
            this.setState({
                image: "https://i.ibb.co/fn3zpxb/LOGO-Grecia.jpg"
            })
            this.setState({
                codigo: "PGREC"
            })
            this.setState({
                lugar: "Grecia"
            })
        }
        else if (this.state.parroquia === "Parroquia Santo Cristo de Esquipulas") {
            this.setState({
                tel: 24410728
            })
            this.setState({
                email: "iglesiaagonia@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/LaAgonia"
            })
            this.setState({
                image: "https://i.ibb.co/YckNJ30/santo-cristo-de-esquipulas.jpg"
            })
            this.setState({
                codigo: "PLAGN"
            })
            this.setState({
                lugar: "La Agonía"
            })
        }

        else if (this.state.parroquia === "Parroquia Sagrado Corazón de Jesús") {
            this.setState({
                tel: 24307465
            })
            this.setState({
                email: "parroquia.corazon.jesus@hotmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/Parroquia-Coraz%C3%B3n-de-Jes%C3%BAs-Alajuela-Oficial-301017777005405/"
            })
            this.setState({
                image: "https://i.ibb.co/4R7CP6J/sagrado-corazon-de-jesus.jpg"
            })
            this.setState({
                codigo: "PSCJA"
            })
            this.setState({
                lugar: "Alajuela"
            })
        }
        else if (this.state.parroquia === "Parroquia Nuestra Señora de Fátima") {
            this.setState({
                tel: 24416190
            })
            this.setState({
                email: "parroquiadefatimainvu@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/PNSFInvu/"
            })
            this.setState({
                image: "https://i.ibb.co/HV6555Y/nuestra-se-ora-de-fatima.jpg"
            })
            this.setState({
                codigo: "PINVU"
            })
            this.setState({
                lugar: "INVU Las Cañas"
            })
        }
        else if (this.state.parroquia === "Parroquia Nuestra Señora de las Piedades Naranjo") {
            this.setState({
                tel: 24500110
            })
            this.setState({
                email: "parroquiadenaranjo@hotmail.com"
            })
            this.setState({
                web: "https://es-la.facebook.com/nuestrasenoradelaspiedades.parroquia/"
            })
            this.setState({
                image: "https://i.ibb.co/HV6555Y/nuestra-se-ora-de-fatima.jpg"
            })
            this.setState({
                codigo: "PNARAN"
            })
            this.setState({
                lugar: "Naranjo"
            })
        }
        else if (this.state.parroquia === "Parroquia San Ramón Nonato") {
            this.setState({
                tel: 24457159
            })
            this.setState({
                email: "parroquiamoncho@gmail.com"
            })
            this.setState({
                web: "parroquiadesanramon.org"
            })
            this.setState({
                image: "https://i.ibb.co/Hz0s1Pt/san-ramon-nonato.jpg"
            })
            this.setState({
                codigo: "PSRAM"
            })
            this.setState({
                lugar: "San Ramón"
            })
        }
        else if (this.state.parroquia === "Parroquia Nuestra Señora de las Mercedes Palmares") {
            this.setState({
                tel: 24536468
            })
            this.setState({
                email: "parroquia@parroquiadepalmares.com"
            })
            this.setState({
                web: "https://www.facebook.com/Parroquianuestrasenoradelasmercedespalmares"
            })
            this.setState({
                image: "https://i.ibb.co/tYVnBsS/nuestra-se-ora-de-las-mercedes.jpg"
            })
            this.setState({
                codigo: "PPALM"
            })
            this.setState({
                lugar: "Palmares"
            })
        }
        else if (this.state.parroquia === "Parroquia Nuestra Señora de las Piedades") {
            this.setState({
                tel: 24478011
            })
            this.setState({
                email: "parroquiapiedadessur1963@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/parroquiapiedadessur"
            })
            this.setState({
                image: "https://i.ibb.co/1KvSmj3/nuestra-se-ora-de-las-piedades-piedades-sur.png"
            })
            this.setState({
                codigo: "PPSUR"
            })
            this.setState({
                lugar: "Naranjo"
            })
        }
        else if (this.state.parroquia === "Parroquia San Rafael Arcángel Atenas") {
            this.setState({
                tel: 24465131
            })
            this.setState({
                email: "parroquiasanrafaelatenas@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/Parroquiasanrafaelarcangelatenas"
            })
            this.setState({
                image: "https://i.ibb.co/0nXCTrr/san-rafael-arcangel-atenas.jpg"
            })
            this.setState({
                codigo: "PATEN"
            })
            this.setState({
                lugar: "Atenas"
            })
        }
        else if (this.state.parroquia === "Parroquia Santo Domingo de Guzmán Orotina") {
            this.setState({
                tel: 24288113
            })
            this.setState({
                email: "ticdaorotina@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/parroquiaorotina"
            })
            this.setState({
                image: "https://i.ibb.co/LtgbWrL/santo-domingo-de-guzman.jpg"
            })
            this.setState({
                codigo: "POROT"
            })
            this.setState({
                lugar: "Orotina"
            })
        }
        else if (this.state.parroquia === "Parroquia Santa Rosa de Lima") {
            this.setState({
                tel: 24877107
            })
            this.setState({
                email: "parroquiadeturrucares@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/ParroquiaSantaRosadeLimaTurrucares"
            })
            this.setState({
                image: "https://i.ibb.co/sR2MZHH/santa-rosa-de-lima.jpg"
            })
            this.setState({
                codigo: "PTURR"
            })
            this.setState({
                lugar: "Turrúcares"
            })
        }
        else if (this.state.parroquia === "Parroquia San Joaquín de Flores") {
            this.setState({
                tel: 22651215
            })
            this.setState({
                email: "pa.sanjoaquin@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/parroquiasanjoaquin"
            })
            this.setState({
                image: "https://i.ibb.co/tcQkcxd/san-joaquin-de-flores.jpg"
            })
            this.setState({
                codigo: "PSJOAH"
            })
            this.setState({
                lugar: "San Joaquín de Flores"
            })
        }
        else if (this.state.parroquia === "Parroquia Nuestra Señora de los Desamparados") {
            this.setState({
                tel: 24314854
            })
            this.setState({
                email: "nuestrasenoradesamparados09@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/profile.php?id=100064374322086"
            })
            this.setState({
                image: "https://i.ibb.co/8s85f09/nuestra-se-ora-de-los-desamparados.jpg"
            })
            this.setState({
                codigo: "PDESA"
            })
            this.setState({
                lugar: "Desamparados"
            })
        }
        else if (this.state.parroquia === "Parroquia Santa Bárvara") {
            this.setState({
                tel: 22693114
            })
            this.setState({
                email: "psantabarbaradeheredia@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/parroquia.heredia"
            })
            this.setState({
                image: "https://i.ibb.co/tpT6yYG/santa-barbara-de-heredia.jpg"
            })
            this.setState({
                codigo: "PSBARH"
            })
            this.setState({
                lugar: "Santa Bárbara"
            })
        }
        else if (this.state.parroquia === "Parroquia Santo Domingo de Guzmán Heredia") {
            this.setState({
                tel: 22440168
            })
            this.setState({
                email: "oficina@parroquiasantodomingo.com"
            })
            this.setState({
                web: "https://www.facebook.com/iglesiasantodomingoheredia"
            })
            this.setState({
                image: "https://i.ibb.co/FK81fv9/santo-domingo-de-guzman-heredia.jpg"
            })
            this.setState({
                codigo: "PROBLE"
            })
            this.setState({
                lugar: "Santa Bárbara"
            })
        }
        else if (this.state.parroquia === "Parroquia Santos Ángeles Custodios") {
            this.setState({
                tel: 24830493
            })
            this.setState({
                email: "ticdacsac@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/parroquiadecarrizal"
            })
            this.setState({
                image: "https://i.ibb.co/hHCd2Gk/santos-angeles-custodios.jpg"
            })
            this.setState({
                codigo: "PCARRI"
            })
            this.setState({
                lugar: "Carrizal"
            })
        }
        else if (this.state.parroquia === "Parroquia Santiago Apóstol") {
            this.setState({
                tel: 24314901
            })
            this.setState({
                email: "parroquiasantiagoapostolcr@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/profile.php?id=100070217235119"
            })
            this.setState({
                image: "https://i.ibb.co/922yyXb/santiago-apostol.jpg"
            })
            this.setState({
                codigo: "PRSEGA"
            })
            this.setState({
                lugar: "Río Segundo"
            })
        }
        else if (this.state.parroquia === "Parroquia San Antonio de Padua") {
            this.setState({
                tel: 22390837
            })
            this.setState({
                email: "parroquiab7@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/parroquiasanantoniodebelen"
            })
            this.setState({
                image: "https://i.ibb.co/f0n1qsz/san-antonio-de-padua.png"
            })
            this.setState({
                codigo: "PBELEN"
            })
            this.setState({
                lugar: "Belén"
            })
        }
        else if (this.state.parroquia === "Parroquia San Rafael") {
            this.setState({
                tel: 24397378
            })
            this.setState({
                email: "p.sanrafaelalajuela@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/profile.php?id=100071045901517"
            })
            this.setState({
                image: "https://i.ibb.co/Kw0ZT3N/san-rafael-arcangel-san-rafael.jpg"
            })
            this.setState({
                codigo: "PSRAFA"
            })
            this.setState({
                lugar: "San Rafael"
            })
        }
        else if (this.state.parroquia === "Parroquia Inmaculada Concepción") {
            this.setState({
                tel: 89705252
            })
            this.setState({
                email: "parroquiadelaguacima@gmail.com "
            })
            this.setState({
                web: "https://www.facebook.com/parroquiadelaguacima"
            })
            this.setState({
                image: "https://i.ibb.co/wBV5vt3/inmaculada-concepcion.jpg"
            })
            this.setState({
                codigo: "Guácima"
            })
        }
        else if (this.state.parroquia === "Parroquia San Antonio de Padua El Tejar") {
            this.setState({
                tel: 24425658
            })
            this.setState({
                email: "Parroquiasanantoniodeltejar70@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/ParroquiaSanAntoniodelTejardeAlajuela"
            })
            this.setState({
                image: "https://i.ibb.co/wBV5vt3/inmaculada-concepcion.jpg"
            })
            this.setState({
                codigo: "PTEJAR"
            })
            this.setState({
                lugar: "El Tejar"
            })
        }
        else if (this.state.parroquia === "Parroquia Santigo Apóstol Sarchí") {
            this.setState({
                tel: 24544150
            })
            this.setState({
                email: "parroquiasarchi@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/ParroquiaDeSarchi/"
            })
            this.setState({
                image: "https://i.ibb.co/txQjgn4/santiago-apostol-sarchi.jpg"
            })
            this.setState({
                codigo: "PSARCH"
            })
            this.setState({
                lugar: "Sarchí"
            })
        }
        else if (this.state.parroquia === "Parroquia Santa Gertrudis") {
            this.setState({
                tel: 24446868
            })
            this.setState({
                email: "parroquiasarchi@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/Parroquia-Santa-Gertrudis-Grecia-Costa-Rica-691944780883327/"
            })
            this.setState({
                image: "https://i.ibb.co/42WLtBD/santa-gertruidis.jpg"
            })
            this.setState({
                codigo: "PSGERT"
            })
            this.setState({
                lugar: "Grecia"
            })
        }
        else if (this.state.parroquia === "Parroquia Sagrado Corazón de Jesús de Tacares") {
            this.setState({
                tel: 24584086
            })
            this.setState({
                email: "parroquiadetacares@hotmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/Parroquia-Santo-Padre-P%C3%ADo-Tacares-Grecia-171194160274856"
            })
            this.setState({
                image: "https://i.ibb.co/R7pRFkY/santo-padre-pio.jpg"
            })
            this.setState({
                codigo: "PTACAR"
            })
            this.setState({
                lugar: "Tacares"
            })
        }
        else if (this.state.parroquia === "Parroquia Santa Bárvara Sabanilla") {
            this.setState({
                tel: 24495203
            })
            this.setState({
                email: "parroquiasantabarbarasabanilla@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/Parroquia.sabanilla.alajuela"
            })
            this.setState({
                image: "https://i.ibb.co/pQFDtvd/santa-barbara-sabanilla.jpg"
            })
            this.setState({
                codigo: "PSABAN"
            })
            this.setState({
                lugar: "Sabanilla"
            })
        }
        else if (this.state.parroquia === "Parroquia Patriarca San José") {
            this.setState({
                tel: 24338983
            })
            this.setState({
                email: "sanjose.barrio@yahoo.es"
            })
            this.setState({
                web: "https://www.facebook.com/Sanjosealajuelabarrio"
            })
            this.setState({
                image: "https://i.ibb.co/WkPD33Z/patriarca-san-jose.jpg"
            })
            this.setState({
                codigo: "PPSJOA"
            })
            this.setState({
                lugar: "San José"
            })
        }
        else if (this.state.parroquia === "Parroquia Santa Ana") {
            this.setState({
                tel: 24339327
            })
            this.setState({
                email: "sanjose.barrio@yahoo.es"
            })
            this.setState({
                web: "https://www.facebook.com/profile.php?id=100064828715930"
            })
            this.setState({
                image: "https://i.ibb.co/SmKsBdV/santa-ana-tambor.png"
            })
            this.setState({
                codigo: "PTAMB"
            })
            this.setState({
                lugar: "Tambor"
            })
        }
        else if (this.state.parroquia === "Parroquia Santa Cecilia") {
            this.setState({
                tel: 24333394
            })
            this.setState({
                email: "santaceciliacoyol@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/santaceciliacoyol"
            })
            this.setState({
                image: "https://i.ibb.co/BZVfQBn/santa-cecilia.jpg"
            })
            this.setState({
                codigo: "PCOYOL"
            })
            this.setState({
                lugar: "El Coyol"
            })
        }
        else if (this.state.parroquia === "Parroquia San Isidro Labrador") {
            this.setState({
                tel: 89032424
            })
            this.setState({
                email: "psanisidro@gmail.com"
            })
            this.setState({
                web: "https://www.facebook.com/parroquiasanisidrolabradoralajuela"
            })
            this.setState({
                image: "https://i.ibb.co/hBJ5jyr/san-isidro.jpg"
            })
            this.setState({
                codigo: "PSISID"
            })
            this.setState({
                lugar: "San Isidro"
            })
        }
        else if (this.state.parroquia === "Parroquia San Mateo Apóstol") {
            this.setState({
                tel: 24288147
            })
            this.setState({
                email: "parroquiasanmateo@gmail.com"
            })
            this.setState({
                web: "https://es-la.facebook.com/parroquia.s.apostol.5/"
            })
            this.setState({
                image: "SIN IMAGEN"
            })
            this.setState({
                codigo: "PSMAT"
            })
            this.setState({
                lugar: "San Mateo"
            })
        }

        else {
            console.log("Ejecuta el ELSE")
        }

    }


    sunmitPost = (e) => {

        if (!this.state.consecutivo) {
            alert('Todos los espacios son requeridos!');
            e.preventDefault();
        } else {
            this.setState({
                postSubmitted: true
            })
            this.capturar();
        }

    }

    render(props) {
        return (
            <>
                {!this.state.postSubmitted ?
                    (
                        <div className="jumbotron">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Ingrese los datos</legend>

                                                <select name="parroquia" onChange={this.onChange('parroquia')} className="form-group col-md-5 col-md-offset-5" aria-label="Default select example">
                                                    <option defaultValue>Seleccione la parroquia</option>
                                                    {/* Vicaría Monseñor Antonio del Carmen Monestel y Zamora */}
                                                    <option value="Parroquia Nuestra Señora del Pilar">Parroquia Nuestra Señora del Pilar</option>
                                                    <option value="Parroquia Sagrado Corazón de Jesús">Parroquia Sagrado Corazón de Jesús</option>
                                                    <option value="Parroquia Santo Cristo de Esquipulas">Parroquia Santo Cristo de Esquipulas</option>
                                                    <option value="Parroquia Nuestra Señora del Carmen">Parroquia Nuestra Señora del Carmen</option>
                                                    <option value="Parroquia Nuestra Señora de Fátima">Parroquia Nuestra Señora de Fátima</option>

                                                    {/* Vicaría Monseñor Víctor Manuel Sanabria Martínez */}
                                                    <option value="Parroquia San Ramón Nonato">Parroquia San Ramón Nonato</option>
                                                    <option value="Parroquia Nuestra Señora de las Mercedes Palmares">Parroquia Nuestra Señora de las Mercedes Palmares</option>
                                                    <option value="Parroquia Nuestra Señora de las Piedades Naranjo">Parroquia Nuestra Señora de las Piedades Naranjo</option>
                                                    <option value="Parroquia de San Rafael Arcángel Zarcero">Parroquia de San Rafael Arcángel Zarcero</option>
                                                    <option value="Parroquia Nuestra Señora de las Piedades">Parroquia Nuestra Señora de las Piedades</option>

                                                    {/* Vicaría Monseñor Juan Vicente Solís Fernández */}
                                                    <option value="Parroquia San Rafael Arcángel Atenas">Parroquia San Rafael Arcángel Atenas</option>
                                                    <option value="Parroquia San Mateo Apóstol">Parroquia San Mateo Apóstol</option>
                                                    <option value="Parroquia Santo Domingo de Guzmán Orotina">Parroquia Santo Domingo de Guzmán Orotina</option>
                                                    <option value="Parroquia Santa Rosa de Lima">Parroquia Santa Rosa de Lima</option>

                                                    {/* Vicaría Monseñor Enrique Bolaños Quesada */}
                                                    <option value="Parroquia Santa Bárvara">Parroquia Santa Bárvara</option>
                                                    <option value="Parroquia San Joaquín de Flores">Parroquia San Joaquín de Flores</option>
                                                    <option value="Parroquia Santiago Apóstol">Parroquia Santiago Apóstol</option>
                                                    <option value="Parroquia Santo Domingo de Guzmán Heredia">Parroquia Santo Domingo de Guzmán Heredia</option>
                                                    <option value="Parroquia Santos Ángeles Custodios">Parroquia Santos Ángeles Custodios</option>
                                                    <option value="Parroquia Nuestra Señora de los Desamparados">Parroquia Nuestra Señora de los Desamparados</option>

                                                    {/* Vicaría Monseñor José Rafael Barquero Arce */}
                                                    <option value="Parroquia San Antonio de Padua">Parroquia San Antonio de Padua</option>
                                                    <option value="Parroquia San Rafael">Parroquia San Rafael</option>
                                                    <option value="Parroquia Inmaculada Concepción">Parroquia Inmaculada Concepción</option>
                                                    <option value="Parroquia San Antonio de Padua El Tejar">Parroquia San Antonio de Padua El Tejar</option>

                                                    {/* Vicaría Monseñor Ángel SanCasimiro Fernández */}
                                                    <option value="Parroquia Nuestra Señora de las Mercedes">Parroquia Nuestra Señora de las Mercedes</option>
                                                    <option value="Parroquia Santigo Apóstol Sarchí">Parroquia Santigo Apóstol Sarchí</option>
                                                    <option value="Parroquia Santa Gertrudis">Parroquia Santa Gertrudis</option>
                                                    <option value="Parroquia Sagrado Corazón de Jesús de Tacares">Parroquia Sagrado Corazón de Jesús de Tacares</option>

                                                    {/* Vicaría Monseñor Delfín Quesada Castro */}
                                                    <option value="Parroquia de San Pedro de Poás">Parroquia de San Pedro de Poás</option>
                                                    <option value="Parroquia Santa Bárvara Sabanilla">Parroquia Santa Bárvara Sabanilla</option>
                                                    <option value="Parroquia Patriarca San José">Parroquia Patriarca San José</option>
                                                    <option value="Parroquia Santa Ana">Parroquia Santa Ana</option>
                                                    <option value="Parroquia Santa Cecilia">Parroquia Santa Cecilia</option>
                                                    <option value="Parroquia San Isidro Labrador">Parroquia San Isidro Labrador</option>
                                                </select>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el consecutivo.</i></span>
                                                    <input onChange={this.onChange('consecutivo')} name="consecutivo" type="text" placeholder="001-2022" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha en que se presentó el solicitante.</i></span>
                                                    <input onChange={this.onChange('fecha')} name="fecha" type="text" className="form-control" placeholder=" 24 de febrero de 2022" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del sacerdote firmante.</i></span>
                                                    <input onChange={this.onChange('cura')} name="cura" type="text" placeholder="Bartolomé de las Casas" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del la persona solicitante.</i></span>
                                                    <textarea onChange={this.onChange('persona')} className="form-control" name="persona" placeholder="Vinicio Ramírez Retana"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el número de cédula de la persona solicitante.</i></span>
                                                    <textarea onChange={this.onChange('cedPersona')} className="form-control" name="cedPersona" placeholder="1 1234 1234"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el lugar donde el solicitante recibió la Confirmación.</i></span>
                                                    <textarea onChange={this.onChange('lugarConfirmacion')} className="form-control" name="lugarConfirmacion" placeholder="Parroquia del Carmen"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el año en que se recibió la Confirmación.</i></span>
                                                    <textarea onChange={this.onChange('añoConfirmacion')} className="form-control" name="añoConfirmacion" placeholder="2002"></textarea>
                                                </div>

                                                <select name="edad" onChange={this.onChange('edad')} className="form-group col-md-5 col-md-offset-5" aria-label="Default select example">
                                                    <option selected>Seleccione el estado legal del solicitante</option>
                                                    <option value="Mayor de edad">Mayor de edad</option>
                                                    <option value="Menor de edad">Menor de edad</option>
                                                </select>

                                                <select name="estadoCivil" onChange={this.onChange('estadoCivil')} className="form-group col-md-5 col-md-offset-5" aria-label="Default select example">
                                                    <option selected>Seleccione el estado civil del solicitante</option>
                                                    <option value="Soltero">Soltero/a</option>
                                                    <option value="Casado">Casado/a</option>
                                                    <option value="Viudo">Viudo/a</option>
                                                    <option value="Divorciado/da">Divorciado/a</option>
                                                </select>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el lugar de residencia del solicitante.</i></span>
                                                    <textarea onChange={this.onChange('residencia')} className="form-control" name="residencia" placeholder="Alajuelita centro, San José"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del padre del solicitante.</i></span>
                                                    <textarea onChange={this.onChange('padrino')} className="form-control" name="padrino" placeholder="Marcos Hernández Pérez"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre de la madre del solicitante.</i></span>
                                                    <textarea onChange={this.onChange('madrina')} className="form-control" name="madrina" placeholder="María López Mora"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la fecha en la que se realizó la Confirmación.</i></span>
                                                    <textarea onChange={this.onChange('fechaConfirmacion')} className="form-control" name="fechaConfirmacion" placeholder="4 de enero del 2000"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del sacerdote que realizó la Comunion.</i></span>
                                                    <textarea onChange={this.onChange('obispoConfirmacion')} className="form-control" name="obispoConfirmacion" placeholder="Juan Mora Porras"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la prueba de la Confirmación.</i></span>
                                                    <textarea onChange={this.onChange('pruebaConfirmacion')} className="form-control" name="pruebaConfirmacion" placeholder="Verificación de documentos sacramentales"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese el nombre del testigo.</i></span>
                                                    <textarea onChange={this.onChange('testigo')} className="form-control" name="testigo" placeholder="Alejandra Peréz Mora"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la cédula del testigo.</i></span>
                                                    <textarea onChange={this.onChange('cedTestigo')} className="form-control" name="cedTestigo" placeholder="1 1234 1234"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon">Ingrese la calidad del téstigo.</i></span>
                                                    <textarea onChange={this.onChange('calidadTestigo')} className="form-control" name="calidadTestigo" placeholder="Encargado de confirmaciones"></textarea>
                                                </div>

                                              
                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-danger btn-lg">Validar información</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                    ) : (
                        <div>


                            <h5 >¡La información fue validada!</h5>

                            <PDFDownloadLink
                                document={<ProductoDeclaracionJuradaConfirmacion parroquia={this.state.parroquia} consecutivo={this.state.consecutivo} lugar={this.state.lugar} fecha={this.state.fecha} persona={this.state.persona} cedPersona={this.state.cedPersona} lugarConfirmacion={this.state.lugarConfirmacion} fechaConfirmacion={this.state.fechaConfirmacion} añoConfirmacion={this.state.añoConfirmacion} edad={this.state.edad} estadoCivil={this.state.estadoCivil} residencia={this.state.residencia} padrino={this.state.padrino} madrina={this.state.madrina} obispoConfirmacion={this.state.obispoConfirmacion} pruebaConfirmacion={this.state.pruebaConfirmacion} cura={this.state.cura} ced={this.state.ced} testigo={this.state.testigo} cedTestigo={this.state.cedTestigo} calidadTestigo={this.state.calidadTestigo} web={this.state.web} image={this.state.image} codigo={this.state.codigo} email={this.state.email} tel={this.state.tel} />}
                                fileName={this.state.codigo + "-DECLJUD-" + this.state.consecutivo}                            >
                                <button type="button" className="btn btn-danger mb-1">Descargar documento</button>
                            </PDFDownloadLink>


                        </div>
                    )
                }


            </>
        );
    }
}

export default DeclaracionJuradaConfirmacion;