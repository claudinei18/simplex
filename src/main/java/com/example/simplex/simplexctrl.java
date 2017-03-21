package com.example.simplex;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by claudinei on 20/03/17.
 */
@Controller
@Scope("prototype")
public class simplexctrl {

    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }

    @RequestMapping(value = "/simplex", method = RequestMethod.POST)
    public void runSimplex(@RequestBody String in){
        System.out.println("chamou o metodo");
    }
}
