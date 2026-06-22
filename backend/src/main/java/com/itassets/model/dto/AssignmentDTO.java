package com.itassets.model.dto;

public class AssignmentDTO {
    private Long id;
    private Long assetId;
    private Long userId;
    private String status;
    private String notes;

    // Constructors
    public AssignmentDTO() {}

    public AssignmentDTO(Long id, Long assetId, Long userId, String status, String notes) {
        this.id = id;
        this.assetId = assetId;
        this.userId = userId;
        this.status = status;
        this.notes = notes;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getAssetId() { return assetId; }
    public void setAssetId(Long assetId) { this.assetId = assetId; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }
}