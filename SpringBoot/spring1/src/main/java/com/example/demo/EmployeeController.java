package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
	
	@RequestMapping("employees")
	public List<Employee> getEmployees() 
	{
		List<Employee> employees = new ArrayList<Employee>();
		employees.add(new Employee(1, "Hari","Pranav"));
		employees.add(new Employee(2, "MS","Dhoni"));
		employees.add(new Employee(3, "Hardhick","Pandiya"));
		employees.add(new Employee(4, "Sachin","Tendulkar"));
		employees.add(new Employee(5, "Harbajan","Singh"));
		employees.add(new Employee(6, "Umesh","Yadhav"));
		return employees;
	}

}
