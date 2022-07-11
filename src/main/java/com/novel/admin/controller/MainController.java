package com.novel.admin.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String getMain(HttpSession session)
    {
        if (session.getAttribute("user") == null)
            return "/main" ;
        
        return "/list" ;
    }
    
}
