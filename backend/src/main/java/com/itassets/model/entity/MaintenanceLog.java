package com.itassets.model.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "maintenance_logs")
public class MaintenanceLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "asset_id", nullable = false)
    private Asset asset;

    @Column(name = "maintenance_type")
    private String maintenanceType;

    @Column(name = "description")
    private String description;

    @Column(name = "performed_by")
    private String performedBy;

    @Column(name = "maintenance_date")
    private LocalDateTime maintenanceDate;

    @Column(name = "cost")
    private Double cost;

    @Column(name = "next_maintenance")
    private LocalDateTime nextMaintenance;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Asset getAsset() { return asset; }
    public void setAsset(Asset asset) { this.asset = asset; }
    public String getMaintenanceType() { return maintenanceType; }
    public void setMaintenanceType(String maintenanceType) { this.maintenanceType = maintenanceType; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getPerformedBy() { return performedBy; }
    public void setPerformedBy(String performedBy) { this.performedBy = performedBy; }
    public LocalDateTime getMaintenanceDate() { return maintenanceDate; }
    public void setMaintenanceDate(LocalDateTime maintenanceDate) { this.maintenanceDate = maintenanceDate; }
    public Double getCost() { return cost; }
    public void setCost(Double cost) { this.cost = cost; }
    public LocalDateTime getNextMaintenance() { return nextMaintenance; }
    public void setNextMaintenance(LocalDateTime nextMaintenance) { this.nextMaintenance = nextMaintenance; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}