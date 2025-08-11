package com.wipro.day4;
import java.util.concurrent.CopyOnWriteArrayList;


public class DeleteSalaryEmployees {

	public static void main(String[] args) {
		CopyOnWriteArrayList<Employee> employees = new CopyOnWriteArrayList<>();

        employees.add(new Employee("1", "vyshnavi", 28, 75000));
        employees.add(new Employee("2", "sravani", 32, 85000));
        employees.add(new Employee("3", "nandini", 30, 95000));
        employees.add(new Employee("4", "kalyani", 26, 60000));

  
        for (Employee e : employees) {
            if (e.salary > 80000) {
                employees.remove(e);
            }
        }
        for (Employee e : employees) {
            System.out.println(e);
        }

	}

}
