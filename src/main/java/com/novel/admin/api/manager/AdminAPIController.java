package com.novel.admin.api.manager;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.novel.admin.data.AdminInfoVO;
import com.novel.admin.mapper.UserMapper;
import com.novel.admin.util.AESAlgorithm;

@RestController
@RequestMapping("/api/admin")
public class AdminAPIController {
    @Autowired UserMapper u_mapper ;

    @GetMapping("/list")
    public Map<String,Object> getAdminData(@RequestParam @Nullable Integer page,@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer status) throws Exception
    {
        Map<String,Object> map =new LinkedHashMap<String,Object>() ;

        if (page == null) page = 1 ;
        List<AdminInfoVO> list =  u_mapper.selectAdminInfoList((page-1)*15, keyword) ;
        for (AdminInfoVO i : list)
        {
            i.setAdmin_pwd(AESAlgorithm.Decrypt(i.getAdmin_pwd()));
        }
        map.put("list",list);
        map.put("status",true) ;
        map.put("message","관리자 정보 조회가 완료되었습니다.") ;
        return map ;
    }

    @DeleteMapping("/list")
    public Map<String,Object> getAdminData(@RequestParam Integer seq)
    {
        Map<String,Object> map =new LinkedHashMap<String,Object>() ;
        u_mapper.deleteAdminInfo(seq);
        map.put("status",true) ;
        map.put("message","관리자 정보 삭제가 완료되었습니다.") ;
        return map ;
    }


    @GetMapping("/login")
    public Map<String,Object> getAdminLogin(@RequestParam String id, @RequestParam String pwd,HttpSession session) throws Exception
    {
        Map<String,Object> map =new LinkedHashMap<String,Object>() ;
        pwd = AESAlgorithm.Encrypt(pwd) ;
        AdminInfoVO user = u_mapper.selectAdminInfo(id, pwd) ;
        if (user == null)
        {
            map.put("status",false) ;
            map.put("message","아이디나 비밀번호가 맞지않습니다.") ;
            return map ;
        }
        map.put("status",true) ;
        map.put("message","환영합니다. "+ user.getAdmin_nickname()+" 님") ;
        session.setAttribute("user", user);
        return map ;
    }
}
