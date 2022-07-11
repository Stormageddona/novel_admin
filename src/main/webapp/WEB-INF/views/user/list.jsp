<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="/assets/js/user/list.js"></script>

</head>
<body>
    <main>
        <div class="list_box">
            <button class="user_reg">유저 등록</button>
            <table class="user_list">
                <thead>
                    <tr>
                        <td>회원번호</td>
                        <td>회원아이디</td>
                        <td>이름(닉네임)</td>
                        <td>이메일</td>
                        <td>생년월일</td>
                        <td>회원등급</td>
                        <td>회원상태</td>
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
            <h1>회원등록</h1>
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
                    <td>이름</td>
                    <td><input type="text" id="join_input_name"></td>
                </tr>
                <tr>
                    <td>닉네임</td>
                    <td><input type="text" id="join_input_nickname"></td>
                </tr>
                <tr>
                    <td>이메일</td>
                    <td><input type="text" id="join_input_email"></td>
                </tr>
                <tr>
                    <td>생일</td>
                    <td><input type="text" id="join_input_birth"></td>
                </tr>
                <tr>
                    <td>회원등급</td>
                    <td>
                        <div class="join_input_grade">
                            <input type="radio" name="join_grade" id="join_grade_label1" data-seq="1" checked>
                            <label for="join_grade_label1">일반</label>
                            <input type="radio" name="join_grade" id="join_grade_label2" data-seq="2">
                            <label for="join_grade_label2">작가</label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>회원상태</td>
                    <td>
                        <div class="join_input_status">
                            <input type="radio" name="join_status" id="join_status_label1" data-seq="1" checked>
                            <label for="join_status_label1">정상</label>
                            <input type="radio" name="join_status" id="join_status_label2" data-seq="2">
                            <label for="join_status_label2">정지</label>
                            <input type="radio" name="join_status" id="join_status_label3" data-seq="3">
                            <label for="join_status_label3">영구정지</label>
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
            <h1>회원정보 수정</h1>
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
                    <td>이름</td>
                    <td><input type="text" id="modify_input_name"></td>
                </tr>
                <tr>
                    <td>닉네임</td>
                    <td><input type="text" id="modify_input_nickname"></td>
                </tr>
                <tr>
                    <td>이메일</td>
                    <td><input type="text" id="modify_input_email"></td>
                </tr>
                <tr>
                    <td>생일</td>
                    <td><input type="text" id="modify_input_birth"></td>
                </tr>
                <tr>
                    <td>회원등급</td>
                    <td>
                        <div class="modify_input_grade">
                            <input type="radio" name="modify_grade" id="modify_grade_label1" data-seq="1" checked>
                            <label for="modify_grade_label1">일반</label>
                            <input type="radio" name="modify_grade" id="modify_grade_label2" data-seq="2">
                            <label for="modify_grade_label2">작가</label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>회원상태</td>
                    <td>
                        <div class="modify_input_status">
                            <input type="radio" name="modify_status" id="modify_status_label1" data-seq="1" checked>
                            <label for="modify_status_label1">정상</label>
                            <input type="radio" name="modify_status" id="modify_status_label2" data-seq="2">
                            <label for="modify_status_label2">정지</label>
                            <input type="radio" name="modify_status" id="modify_status_label3" data-seq="3">
                            <label for="modify_status_label3">영구정지</label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><button id="modify_submit">등록</button>
                    <button id="modify_cancel">취소</button></td>
                </tr>
            </table>
        </div>
    </div>
</body>
</html>