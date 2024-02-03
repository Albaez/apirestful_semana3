-- Active: 1705368609238@@localhost@5432@api_nominaciones@public
create table tbl_oscars
(
    id SERIAL PRIMARY KEY,
    pelicula VARCHAR (500),
    actor VARCHAR(100),
    creado TIMESTAMP DEFAULT current_timestamp
);


CREATE TABLE tbl_categorias (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(500) NOT NULL
);

INSERT into tbl_categorias
(nombre)
VALUES
('Mejor película'),
('Mejor dirección'),
('Mejor actor principal'),
('Mejor actor secundario'),
('Mejor actriz principal'),
('Mejor actriz secundaria'),
('Mejor guion original'),
('Mejor guion adaptado');


CREATE TABLE tbl_nominaciones (
  pelicula_id INT REFERENCES tbl_oscars(id),
  categoria_id INT REFERENCES tbl_categorias(id),
  PRIMARY KEY (pelicula_id, categoria_id)
);



SELECT *
FROM tbl_oscars
INNER JOIN tbl_nominaciones ON tbl_oscars.id = tbl_nominaciones.pelicula_id
INNER JOIN tbl_categorias ON tbl_nominaciones.categoria_id = tbl_categorias.id;




INSERT into tbl_oscars
(pelicula, actor)
VALUES
('Oppenheimer', 'Cillian Murphy'),
('Maestro' , 'Bradley Cooper '),
('Los que se quedan' , 'Paul Giamatti'),
('American Fiction' , 'Jeffrey Wright'),
('Rustin' , 'Colman Domingo ');

SELECT * from tbl_oscars