package com.app.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor

@Getter
@Setter
@ToString
public class FeedbackDTO
{
	@JsonProperty(access = Access.READ_ONLY)
    private Long id;
	@JsonProperty(access = Access.READ_ONLY)
    private Long userId;
    private String message;

    @JsonCreator
    public FeedbackDTO(@JsonProperty("id") Long id, 
                        
                       @JsonProperty("message") String message) {
        this.id = id;
    
        this.message = message;
    }
}
