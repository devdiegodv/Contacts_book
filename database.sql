--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2022-03-12 12:58:14



SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE contacts_db;
--
-- TOC entry 3335 (class 1262 OID 16394)
-- Name: contacts_db; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE contacts_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';


ALTER DATABASE contacts_db OWNER TO postgres;

--\connect contacts_db

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 211 (class 1259 OID 16465)
-- Name: contact_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contact_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contact_id_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 212 (class 1259 OID 16466)
-- Name: contact; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contact (
    id integer DEFAULT nextval('public.contact_id_seq'::regclass) NOT NULL,
    name character varying(100) NOT NULL,
    last_name character varying(200) NOT NULL,
    address character varying(200) NOT NULL,
    email character varying(100) NOT NULL,
    phone_number character varying(100) NOT NULL,
    "creation_date" timestamp without time zone NOT NULL
);


ALTER TABLE public.contact OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16478)
-- Name: belongsto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.belongsto_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.belongsto_id_seq OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16563)
-- Name: belongsto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.belongsto (
    id integer DEFAULT nextval('public.belongsto_id_seq'::regclass) NOT NULL,
    user_app_id smallint NOT NULL,
    contact_id smallint NOT NULL
);


ALTER TABLE public.belongsto OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16418)
-- Name: user_app; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_app (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    last_name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL
);


ALTER TABLE public.user_app OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16417)
-- Name: user_app_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_app_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_app_id_seq OWNER TO postgres;

--
-- TOC entry 3337 (class 0 OID 0)
-- Dependencies: 209
-- Name: user_app_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_app_id_seq OWNED BY public.user_app.id;


--
-- TOC entry 3174 (class 2604 OID 16421)
-- Name: user_app id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_app ALTER COLUMN id SET DEFAULT nextval('public.user_app_id_seq'::regclass);


--
-- TOC entry 3327 (class 0 OID 16466)
-- Dependencies: 212
-- Data for Name: contact; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.contact (id, name, last_name, address, email, phone_number, "creation_date") VALUES (21, 'Lucia', 'Domínguez', 'C/Torneo 18 1ºD', 'luci@gmail.com', '677004546', '2022-03-03 10:00:49.317622');
INSERT INTO public.contact (id, name, last_name, address, email, phone_number, "creation_date") VALUES (4, 'Sofía', 'Fernández', 'C/Tetuán 71', 'sofia@gmail.com', '695122014', '2022-02-18 00:00:00');
INSERT INTO public.contact (id, name, last_name, address, email, phone_number, "creation_date") VALUES (26, 'Rocio', 'Gómez', 'C/Sol 3', 'roci34@gmail.com', '674456444', '2022-03-06 22:53:51.421436');
INSERT INTO public.contact (id, name, last_name, address, email, phone_number, "creation_date") VALUES (28, 'Raul', 'Vega', 'C/Toneleros 7', 'raul@hotmail.com', '675400127', '2022-03-07 17:15:17.241052');
INSERT INTO public.contact (id, name, last_name, address, email, phone_number, "creation_date") VALUES (30, 'Marina', 'Cerdán Vázquez', 'C/Federico García Lorca 7', 'marina@gmail.com', '637103700', '2022-03-07 17:15:17.241052');
INSERT INTO public.contact (id, name, last_name, address, email, phone_number, "creation_date") VALUES (31, 'Antonio', 'Sánchez ', 'Av. Miraflores 72 4ºD', 'antsan176@hotmail.com', '600237803', '2022-03-07 17:15:17.241052');
INSERT INTO public.contact (id, name, last_name, address, email, phone_number, "creation_date") VALUES (19, 'Jose', 'Moreno Rodríguez', 'C/Catadores', 'jose@gmail.com', '678453764', '2022-03-02 16:28:29.237501');
INSERT INTO public.contact (id, name, last_name, address, email, phone_number, "creation_date") VALUES (32, 'Andrés', 'Romero', 'C/Fuencarral 27', 'andy@gmail.com', '678951100', '2022-03-07 17:15:17.241052');


--
-- TOC entry 3329 (class 0 OID 16563)
-- Dependencies: 214
-- Data for Name: belongsto; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.belongsto (id, user_app_id, contact_id) VALUES (4, 3, 4);
INSERT INTO public.belongsto (id, user_app_id, contact_id) VALUES (19, 3, 19);
INSERT INTO public.belongsto (id, user_app_id, contact_id) VALUES (21, 3, 21);
INSERT INTO public.belongsto (id, user_app_id, contact_id) VALUES (25, 3, 28);
INSERT INTO public.belongsto (id, user_app_id, contact_id) VALUES (27, 3, 30);
INSERT INTO public.belongsto (id, user_app_id, contact_id) VALUES (28, 3, 31);
INSERT INTO public.belongsto (id, user_app_id, contact_id) VALUES (29, 3, 32);


--
-- TOC entry 3325 (class 0 OID 16418)
-- Dependencies: 210
-- Data for Name: user_app; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_app (id, name, last_name, email, password) VALUES (3, 'Miguel', 'Rodriguez', 'miguel@gmail.com', '1234');
INSERT INTO public.user_app (id, name, last_name, email, password) VALUES (6, 'pepe', 'garcía', 'pepe@gmail.com', '1234');
INSERT INTO public.user_app (id, name, last_name, email, password) VALUES (8, 'rocio', 'garcía', 'rocio@gmail.com', '1234');
INSERT INTO public.user_app (id, name, last_name, email, password) VALUES (4, 'luis', 'tamayo', 'sergio@gmail.com', '1111');


--
-- TOC entry 3338 (class 0 OID 0)
-- Dependencies: 211
-- Name: contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contact_id_seq', 32, true);


--
-- TOC entry 3339 (class 0 OID 0)
-- Dependencies: 213
-- Name: belongsto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.belongsto_id_seq', 29, true);


--
-- TOC entry 3340 (class 0 OID 0)
-- Dependencies: 209
-- Name: user_app_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_app_id_seq', 8, true);


--
-- TOC entry 3180 (class 2606 OID 16473)
-- Name: contact contact_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contact
    ADD CONSTRAINT contact_pkey PRIMARY KEY (id);


--
-- TOC entry 3182 (class 2606 OID 16568)
-- Name: belongsto belongsto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.belongsto
    ADD CONSTRAINT belongsto_pkey PRIMARY KEY (id);


--
-- TOC entry 3178 (class 2606 OID 16423)
-- Name: user_app user_app_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_app
    ADD CONSTRAINT user_app_pkey PRIMARY KEY (id);


--
-- TOC entry 3183 (class 2606 OID 16569)
-- Name: belongsto fk_contact; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.belongsto
    ADD CONSTRAINT fk_contact FOREIGN KEY (contact_id) REFERENCES public.contact(id);


--
-- TOC entry 3184 (class 2606 OID 16574)
-- Name: belongsto fk_user_app; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.belongsto
    ADD CONSTRAINT fk_user_app FOREIGN KEY (user_app_id) REFERENCES public.user_app(id);


--
-- TOC entry 3336 (class 0 OID 0)
-- Dependencies: 3335
-- Name: DATABASE contacts_db; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON DATABASE contacts_db TO user_db;


-- Completed on 2022-03-12 12:58:14

--
-- PostgreSQL database dump complete
--


