package com.itassets.model.dto;

public class AssetDTO {
    private Long id;
    private String assetTag;
    private String name;
    private String assetType;
    private String description;
    private String serialNumber;
    private String status;
    private String location;
    private String qrCode;

    // Constructors
    public AssetDTO() {}

    public AssetDTO(Long id, String assetTag, String name, String assetType, String description, String serialNumber, String status, String location, String qrCode) {
        this.id = id;
        this.assetTag = assetTag;
        this.name = name;
        this.assetType = assetType;
        this.description = description;
        this.serialNumber = serialNumber;
        this.status = status;
        this.location = location;
        this.qrCode = qrCode;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getAssetTag() { return assetTag; }
    public void setAssetTag(String assetTag) { this.assetTag = assetTag; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getAssetType() { return assetType; }
    public void setAssetType(String assetType) { this.assetType = assetType; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getSerialNumber() { return serialNumber; }
    public void setSerialNumber(String serialNumber) { this.serialNumber = serialNumber; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getQrCode() { return qrCode; }
    public void setQrCode(String qrCode) { this.qrCode = qrCode; }
}