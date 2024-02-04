package com.apuestas.RetoApuestas.domain.usecases.ventaderecarga;
import com.apuestas.RetoApuestas.domain.models.VentaRecarga;

import java.util.List;


public interface VentaRecargaService {
	List<VentaRecarga>listar();
	List<VentaRecarga> findByOperador(String operador);
	List<VentaRecarga> findByVendedor(String vendedor);
	VentaRecarga Venta(VentaRecarga ventaRecarga);
}
