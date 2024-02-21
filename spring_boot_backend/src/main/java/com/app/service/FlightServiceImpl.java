package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ApiException;
import com.app.dao.FlightDao;
import com.app.dto.ApiResponse;
import com.app.dto.FlightDTO;
import com.app.entities.Flight;
import com.app.entities.Location;

@Service
@Transactional
public class FlightServiceImpl implements FlightService {

	@Autowired
	private FlightDao fdao;
	
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<FlightDTO> findAllFights() {
		System.out.println("inside find all flight method");
		return fdao.findAll()
			   .stream()
			   .map(flight->mapper.map(flight, FlightDTO.class))
			   .collect(Collectors.toList());      
	}

	@Override
	public FlightDTO findFlightById(String id) {
		
		System.out.println("inside find flight by Id method");
		return mapper.map(fdao.findById(id).orElseThrow(() -> new ApiException("Not found")),FlightDTO.class);

	}

	@Override
	public FlightDTO addNewFlight(FlightDTO fdto) {
		
		Flight flightEntity = mapper.map(fdto,Flight.class);
		Flight persistEntity = fdao.save(flightEntity);
		return mapper.map(persistEntity, FlightDTO.class);
		
	}

	@Override
	public FlightDTO updateFlightDetails(String id, FlightDTO fdto) 
	{
		Flight flight = fdao.findById(id).orElseThrow(()-> new ApiException("Flight not found"));
		flight.setFlightId(fdto.getFlightId());
		flight.setNoOfSeats(fdto.getNoOfSeats());
		flight.setArrivalLocationId(fdto.getArrivalLocationId());
		flight.setDepartureLocationId(fdto.getDepartureLocationId());
		flight.setArrivalTime(fdto.getArrivalTime());
		flight.setDepartureDate(fdto.getDepartureDate());
		flight.setReturnDate(fdto.getReturnDate());
		flight.setDepartureTime(fdto.getDepartureTime());
		flight.setArrivalTime(fdto.getArrivalTime());
		
		return mapper.map(flight, FlightDTO.class);
	}

	@Override
	public ApiResponse deleteFlightDetails(String id) {
		
		Optional<Flight> flight = fdao.findById(id);
		if(flight.isPresent())
		{
			System.out.println("inside if-statement of delete impl");
			fdao.delete(flight.get());
		}

        
		return new ApiResponse("Flight is deleted");
	}

	@Override
	public Set<Flight> findByDepartureLocationIdAndArrivalLocationId(Location departureLocation,
			Location arrivalLocation) {
		 return fdao.findByDepartureLocationIdAndArrivalLocationId(departureLocation, arrivalLocation);
	}

	}

