package com.apuestas.RetoApuestas.domain.usecases.ventaderecarga;

import com.apuestas.RetoApuestas.domain.models.VentaRecarga;
import com.apuestas.RetoApuestas.domain.models.gateway.VentaRecargaRepository;
import com.apuestas.RetoApuestas.domain.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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
		LocalDateTime now = LocalDateTime.now();
		String formattedDateTime = DateUtils.formatDateTime(now);
		LocalDateTime dateTime = LocalDateTime.parse(formattedDateTime, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
		ventaRecarga.setFecha(dateTime);
		return ventaRecargaRepository.save(ventaRecarga);
	}




}
