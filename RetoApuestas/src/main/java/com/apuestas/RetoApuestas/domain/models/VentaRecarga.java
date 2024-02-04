package com.apuestas.RetoApuestas.domain.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "registro_ventas", schema = "public")
public class VentaRecarga {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "operador")
	private String operador;

	@Column(name = "vendedor")
	private String vendedor;

	@Column(name = "valor")
	private BigDecimal valor;
}
