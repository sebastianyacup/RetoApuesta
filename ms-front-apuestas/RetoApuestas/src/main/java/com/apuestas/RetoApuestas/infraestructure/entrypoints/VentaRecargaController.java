package com.apuestas.RetoApuestas.infraestructure.entrypoints;

import com.apuestas.RetoApuestas.domain.models.VentaRecarga;
import com.apuestas.RetoApuestas.domain.usecases.ventaderecarga.VentaRecargaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/recargas")
public class VentaRecargaController {

	@Autowired
	private VentaRecargaService ventaRecargaService;

	@GetMapping
	public List<VentaRecarga> listar() {
		List<VentaRecarga> ventas = ventaRecargaService.listar();
		for (VentaRecarga venta : ventas) {
			System.out.println("ID: " + venta.getId());
			System.out.println("Operador: " + venta.getOperador());
			System.out.println("Vendedor: " + venta.getVendedor());
			System.out.println("Valor: " + venta.getValor());
		}
		return ventas;
	}

	@PostMapping
	public VentaRecarga agregar(@RequestBody VentaRecarga ventaRecarga){
		return ventaRecargaService.Venta(ventaRecarga);
	}

	@GetMapping("/por-operador/{operador}")
	public List<VentaRecarga> listarPorOperador(@PathVariable String operador) {
		return ventaRecargaService.findByOperador(operador);
	}

	@GetMapping("/por-vendedor/{vendedor}")
	public List<VentaRecarga> listarPorVendedor(@PathVariable String vendedor) {
		return ventaRecargaService.findByVendedor(vendedor);
	}

}
