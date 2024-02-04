package com.apuestas.RetoApuestas.domain.usecases.ventaderecarga;

import com.apuestas.RetoApuestas.domain.models.VentaRecarga;
import com.apuestas.RetoApuestas.domain.models.gateway.VentaRecargaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class VentaRecargaServiceImpl implements VentaRecargaService {
	@Autowired
	private VentaRecargaRepository ventaRecargaRepository;

	@Override
	public List<VentaRecarga> listar() {
		return ventaRecargaRepository.findAll();
	}

	@Override
	public List<VentaRecarga> findByOperador(String operador) {
		return ventaRecargaRepository.findByOperador(operador);
	}

	@Override
	public List<VentaRecarga> findByVendedor(String vendedor) {
		return ventaRecargaRepository.findByVendedor(vendedor);
	}


	@Override
	public VentaRecarga Venta(VentaRecarga ventaRecarga) {
		return  ventaRecargaRepository.save(ventaRecarga);
	}
}
