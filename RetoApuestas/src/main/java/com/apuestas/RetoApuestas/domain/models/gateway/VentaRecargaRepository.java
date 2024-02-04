package com.apuestas.RetoApuestas.domain.models.gateway;

import com.apuestas.RetoApuestas.domain.models.VentaRecarga;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.Repository;

import java.util.List;
public interface VentaRecargaRepository  extends Repository <VentaRecarga, Integer>{
	List<VentaRecarga> findAll();
	List<VentaRecarga> findByOperador(String operador);
	List<VentaRecarga> findByVendedor(String vendedor);
	VentaRecarga save(VentaRecarga ventaRecarga);
}
