package com.devopsassignment.ai_query_system.controller;


import com.devopsassignment.ai_query_system.dto.ChatRequest;
import com.devopsassignment.ai_query_system.dto.ChatResponse;
import com.devopsassignment.ai_query_system.service.ChatService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin("*")
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping
    public ChatResponse askAI(@RequestBody ChatRequest request) {
        return chatService.askAI(request);
    }
}
