package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ApiException;
import com.app.dao.LocationDao;
import com.app.dto.FlightDTO;
import com.app.entities.Flight;
import com.app.entities.Location;

@Service
@Transactional
public class LocationServiceImpl implements LocationService {
	
	@Autowired
	private LocationDao lDao;
	
	@Autowired
	private FlightService fService;
	
	@Autowired
	private ModelMapper mapper;
	

	public Set<FlightDTO> findFlightByCities(String departureCity, String arrivalCity) {
        Location departureLocation = lDao.findByCity(departureCity);
        Location arrivalLocation = lDao.findByCity(arrivalCity);
        System.out.println(departureLocation);
        System.out.println(arrivalLocation);
        if (departureLocation != null && arrivalLocation != null) {
            // If both departure and arrival locations exist, check if there's a flight between them
            Set<Flight> flights = fService.findByDepartureLocationIdAndArrivalLocationId(departureLocation, arrivalLocation);
            return flights.stream().map(flight->mapper.map(flight,FlightDTO.class)).collect(Collectors.toSet());
            
        } else {
            // If either departure or arrival location does not exist, return empty
            throw new ApiException("No such flight found");
        }
	}

	@Override
	public List<Location> getAllLocationCity() {
		
		return lDao.findAll().stream().collect(Collectors.toList());
	}

	

}
