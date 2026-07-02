package com.devopsassignment.ai_query_system.service;


import com.devopsassignment.ai_query_system.config.OpenRouterConfig;
import com.devopsassignment.ai_query_system.dto.ChatRequest;
import com.devopsassignment.ai_query_system.dto.ChatResponse;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class ChatService {

    private final OpenRouterConfig config;
    private final RestTemplate restTemplate = new RestTemplate();

    public ChatService(OpenRouterConfig config) {
        this.config = config;
    }

    public ChatResponse askAI(ChatRequest request) {

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(config.getApiKey());
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> body = Map.of(
                "model", config.getModel(),
                "messages", List.of(
                        Map.of(
                                "role", "user",
                                "content", request.getMessage()
                        )
                )
        );

        HttpEntity<Map<String, Object>> entity =
                new HttpEntity<>(body, headers);

        try {
            System.out.println(config.getUrl());
            ResponseEntity<Map> response = restTemplate.exchange(
                    config.getUrl(),
                    HttpMethod.POST,
                    entity,
                    Map.class
            );

            Map choice = (Map) ((List<?>) response.getBody().get("choices")).get(0);

            Map message = (Map) choice.get("message");

            String content = message.get("content").toString();

            return new ChatResponse(content);

        } catch (Exception e) {

            e.printStackTrace();

            return new ChatResponse(
                    "Error : " + e.getMessage()
            );
        }
    }
}
