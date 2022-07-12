<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="/assets/js/admin/list.js"></script>

</head>
<body>
    <main>
        <div class="list_box">
            <button class="admin_reg">관리자 등록</button>
            <table class="admin_list">
                <thead>
                    <tr>
                        <td>관리자 번호</td>
                        <td>아이디</td>
                        <td>닉네임</td>
                        <td>관리자 등급</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>




    <div class="join_area">
        <div class="join_box">
            <h1>관리자 등록</h1>
            <table>
                <tr>
                    <td>아이디</td>
                    <td><input type="text" id="join_input_id"></td>
                </tr>
                <tr>
                    <td>비밀번호</td>
                    <td><input type="password" id="join_input_pwd"></td>
                </tr>
                <tr>
                    <td>닉네임</td>
                    <td><input type="text" id="join_input_nickname"></td>
                </tr>
                <tr>
                    <td>관리자 등급</td>
                    <td>
                        <div class="join_input_grade">
                            <input type="radio" name="join_grade" id="join_grade_label1" data-seq="1" checked>
                            <label for="join_grade_label1">일반 관리자</label>
                            <input type="radio" name="join_grade" id="join_grade_label2" data-seq="2">
                            <label for="join_grade_label2">전체 관리자</label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><button id="join_submit">등록</button>
                    <button id="join_cancel">취소</button></td>
                </tr>
            </table>
        </div>
    </div>
    <div class="modify_area">
        <div class="modify_box">
            <h1>관리자 정보 수정</h1>
            <table>
                <tr>
                    <td>아이디</td>
                    <td><input type="text" id="modify_input_id"></td>
                </tr>
                <tr>
                    <td>비밀번호</td>
                    <td><input type="password" id="modify_input_pwd"></td>
                </tr>
                <tr>
                    <td>닉네임</td>
                    <td><input type="text" id="modify_input_nickname"></td>
                </tr>
                <tr>
                    <td>회원등급</td>
                    <td>
                        <div class="modify_input_grade">
                            <input type="radio" name="modify_grade" id="modify_grade_label1" data-seq="1" checked>
                            <label for="modify_grade_label1">일반 관리자</label>
                            <input type="radio" name="modify_grade" id="modify_grade_label2" data-seq="2">
                            <label for="modify_grade_label2">전체 관리자</label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><button id="modify_submit">수정</button>
                    <button id="modify_cancel">취소</button></td>
                </tr>
            </table>
        </div>
    </div>
</body>
</html>