package com.itassets.repository;

import com.itassets.model.entity.MaintenanceLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaintenanceRepository extends JpaRepository<MaintenanceLog, Long> {
    // TODO: Add custom query methods
}