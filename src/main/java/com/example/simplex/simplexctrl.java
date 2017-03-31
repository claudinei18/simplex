package com.example.simplex;

import org.json.JSONArray;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * Created by claudinei on 20/03/17.
 */
@Controller
@Scope("prototype")
@RequestMapping(value = "/")
public class simplexctrl {

    @RequestMapping(value = "/simplex", method = RequestMethod.POST)
    @ResponseBody
    public void runSimplex(@RequestBody String json) {

        try {
            JSONArray jsonArray = new JSONArray(json);

            System.out.println("Valor das variáveis");
            System.out.println(jsonArray);
//            for (int i = 0; i < numVar; i++) {
//                System.out.println(jsonArray.getJSONObject(i).getJSONArray("arrayValVar"));
//            }
            System.out.println("chamou o metodo");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
