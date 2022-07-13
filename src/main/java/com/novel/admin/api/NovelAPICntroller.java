package com.novel.admin.api;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.novel.admin.data.GenreInfoVO;
import com.novel.admin.mapper.NovelMapper;

@RestController
@RequestMapping("/api/novel")
public class NovelAPICntroller {
    @Autowired NovelMapper n_mapper ;

    @GetMapping("/genre")
    public Map<String,Object> getGenreList(@RequestParam @Nullable Integer page,@RequestParam @Nullable String keyword)
    {
        Map<String,Object> map =new LinkedHashMap<String,Object>() ;
        if (page == null) page = 1 ;
        List<GenreInfoVO> list =  n_mapper.selectGenreList(keyword,(page-1)*20) ;
        map.put("list",list);
        map.put("status",true) ;
        map.put("message","장르정보 조회가 완료되었습니다.") ;
        return map ;
    }

    @PatchMapping("/genre")
    public Map<String,Object> patchGenreData(@RequestParam Integer seq,@RequestParam String name)
    {
        Map<String,Object> map =new LinkedHashMap<String,Object>() ;

        try {
            n_mapper.updateGenreInfo(seq,name) ;
        } catch (DuplicateKeyException e) {
            map.put("status", false) ;
            map.put("message","이미 존재하는 장르 명 입니다.") ;
            return map ;
        }
        map.put("status", true) ;
        map.put("message","장르 명이 수정 되었습니다.") ;
        return map ;
    }

    @PutMapping("/genre")
    public Map<String,Object> putGenreData(@RequestParam String name)
    {
        Map<String,Object> map =new LinkedHashMap<String,Object>() ;
        try {
            n_mapper.insertGenre(name);
        } catch (DuplicateKeyException e) {
            map.put("status", false) ;
            map.put("message","이미 추가된 장르 명 입니다.") ;
            return map ;
        }
        
        map.put("status", true) ;
        map.put("message","장르 추가가 되었습니다.") ;
        return map ;
    }

}
