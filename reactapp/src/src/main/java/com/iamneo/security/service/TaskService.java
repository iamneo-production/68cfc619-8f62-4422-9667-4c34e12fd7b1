package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Task;
import com.iamneo.security.repository.TaskRepo;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepo stRepo; //reference variable
	
	public Task saveDetails(Task e) {
		return stRepo.save(e);
	}
	public List <Task>getDetails()

{
		return stRepo.findAll();
		
}
	public Task updateDetails(Task e1)
	{
		return stRepo.saveAndFlush(e1);
	}
	public void deleteDetails(int id)
	{
		stRepo.deleteById(id);
	}

}