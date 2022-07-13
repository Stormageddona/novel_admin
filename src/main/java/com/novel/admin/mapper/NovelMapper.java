package com.novel.admin.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.novel.admin.data.GenreInfoVO;

@Mapper
public interface NovelMapper {
    //장르 관리
    public List<GenreInfoVO> selectGenreList(String keyword, Integer page) ;
    public void insertGenre(String name) ;
    public void updateGenreInfo(Integer seq, String name) ;
}
